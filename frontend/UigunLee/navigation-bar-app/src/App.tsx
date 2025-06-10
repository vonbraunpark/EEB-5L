import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ForumIcon from "@mui/icons-material/Forum";
import AddReactionIcon from '@mui/icons-material/AddReaction';

const App: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    EDDI
                </Typography>
                <Button
                    color="inherit"
                    component={Link}
                    to="/"
                    startIcon={<HomeIcon />}
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/html-css-test"
                    startIcon={<CodeIcon />}
                >
                    HTML/CSS Test
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/js-test"
                    startIcon={<JavascriptIcon />}
                >
                    Javascript Test
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/board/list"
                    startIcon={<ForumIcon />}
                >
                    Practice App
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/practice-app"
                    startIcon={<AddReactionIcon />}
                >
                    게시판
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default App