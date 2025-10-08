
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BlogHero from "../components/Blog/BlogHero";
import BlogContent from "../components/Blog/BlogContent";
import LatestBlog from "../components/Blog/LatestBlog";
import Footer from "../components/Footer";
import Features from "../components/Features";

const Blog = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <BlogHero blogId={id} />
      <BlogContent />
      <LatestBlog />
      <Features />
      <Footer />
    </>
  );
};

export default Blog;
