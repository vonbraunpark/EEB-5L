import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ForumIcon from "@mui/icons-material/Forum";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';

const App: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    EDDI
                </Typography>
                <Button
                    color="inherit"
                    component={Link}
                    to="/"
                    startIcon={<HomeIcon/>}
                >
                    <TextBox>
                        Home
                    </TextBox>
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/html-css-test"
                    startIcon={<CodeIcon/>}
                >
                    <TextBox>
                        HTML/CSS Test
                    </TextBox>
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/js-test"
                    startIcon={<JavascriptIcon/>}
                >
                    <TextBox>
                        Javascript Test
                    </TextBox>
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/board/list"
                    startIcon={<ForumIcon/>}
                >
                    <TextBox>
                        게시판
                    </TextBox>
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/react-test"
                    startIcon={<SportsGymnasticsIcon/>}
                >
                    <TextBox>
                        React 실험
                    </TextBox>
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/practice"
                    startIcon={<ChecklistOutlinedIcon/>}
                >
                    <TextBox>
                        Practice
                    </TextBox>
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/kakao-authentication/login"
                    startIcon={<ChecklistOutlinedIcon/>}
                >
                    <TextBox>
                        로그인
                    </TextBox>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default App

const TextBox = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 14px;
        color: black;
        padding: 5px;
        @media screen and (max-width: 900px) {
            display: none;
        }
    `;