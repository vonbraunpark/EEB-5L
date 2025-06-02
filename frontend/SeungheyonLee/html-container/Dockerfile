# ✅ 1단계: 빌드 단계 (Node.js 환경에서 프론트엔드 앱 빌드)
FROM node:20 as builder
# Node.js v20 기반의 이미지를 사용한다. (버전 고정 추천)
# as builder → 멀티 스테이지 빌드에서 사용할 별칭

WORKDIR /app
# 작업 디렉토리를 /app으로 설정한다. (이 디렉토리 내에서 모든 명령 실행됨)

COPY . .
# 현재 디렉토리(소스코드 전체)를 컨테이너 내의 /app 디렉토리에 복사

RUN npm install && npm run build
# 1) 필요한 패키지를 설치하고
# 2) 프로젝트를 빌드 (예: React, Vue 등의 정적 웹 파일을 생성)


# ✅ 2단계: 실행 단계 (Nginx로 정적 파일 서빙)
FROM nginx:alpine
# Nginx를 기반으로 하는 초경량 Alpine 리눅스 이미지 사용
# 정적 파일 서빙용으로 매우 가볍고 빠름

COPY --from=builder /app/dist /usr/share/nginx/html
# builder 단계에서 생성한 dist 폴더(정적 빌드 결과물)를
# Nginx의 기본 정적 파일 루트로 복사

COPY nginx.conf /etc/nginx/nginx.conf
# 사용자 정의 nginx 설정 파일을 덮어씌움
# 기본 설정을 커스터마이징할 수 있음

EXPOSE 80
# 컨테이너가 80번 포트를 외부에 노출 (HTTP 기본 포트)

CMD ["nginx", "-g", "daemon off;"]
# nginx를 실행하는 명령
# daemon off → 백그라운드가 아닌 foreground 실행 (Docker가 프로세스를 추적하기 위해 필수)
