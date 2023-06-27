import Header from "./components/Header/Header"
import Wrapper from "./components/Wrapper"

export default function Home() {

  return (
    <main>
      <div className="main-container">
      <div className="head">
        <Header />
      </div>
      <div>
        <Wrapper/>
      </div>
      <div className="developer">
        <p>Developed By: <a href="https://www.facebook.com/limnixon03292001/">Nixon A. Lim</a></p>
      </div>
    </div>
    </main>
  )
}
