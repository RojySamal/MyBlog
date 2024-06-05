import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
import Post from "../Components/Post";
import imageDummy from '../assets/images/aiimage.avif'

const mainFeaturedPost = {
  title: "16 little UI design rules that make a big impact",
  description:
    "A UI design case study to redesign an example user interface using logical rules or guidelines.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Can You Pass This Apple-Orange Interview At Apple 🍎?",
    date: "Mar 14, 2024",
    description: "The iPhone Company’s Interview Question.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3_NjzkVEbMhPwJTH9BajWw.png",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container style={{ padding: "0" }} maxWidth="xl">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={2} columns={16} sx={{ mt: 0.5 }}>
            <Grid item xs={10}>
              <Post
                blogTitle="Dummy"
                blogContent="Dummy"
                blogTopic={[]}
                blogImage={imageDummy}
                blogSummary="Summary is loading from the backend"
              />
              <Post
                blogTitle="Dummy"
                blogContent="Dummy"
                blogTopic={[]}
                blogImage={imageDummy}
                blogSummary="Summary is loading from the backend"
              />
            </Grid>
            <Grid item xs={6}>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                social={sidebar.social}
              />
            </Grid>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
