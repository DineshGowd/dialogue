import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/global.scss";

export const metadata = {
  title: "Dialogue",
  description: "This is a dialogue website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <NavBar />
          <div className="main-content">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
