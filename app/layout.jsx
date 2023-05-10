import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";
import "@/styles/global.scss";

export const metadata = {
  title: "Dialogue",
  description: "This is a dialogue website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <NavBar />
            <div className="main-content">{children}</div>
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
