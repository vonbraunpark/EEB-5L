package com.example.monoproj.sample_board.entitiy;

import com.example.monoproj.account_profile.entity.AccountProfile;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@NoArgsConstructor
@RequiredArgsConstructor
public class SampleBaord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long baordId;

    @Setter
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_profile_id", nullable = false)
    private AccountProfile writer;

    @Setter
    private String content;

    @JsonFormat(shape = JsonFormat.Shape.STRING,
            pattern = "yyyy-MM-dd HH:mm",
            timezone = "Asia/Seoul")
    @CreationTimestamp
    private LocalDateTime createDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING,
            pattern = "yyyy-MM-dd HH:mm",
            timezone = "Asia/Seoul")
    @UpdateTimestamp
    private LocalDateTime updateDate;
}
