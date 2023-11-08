"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page() {
  return(
    <div>
        <CountButton width={"50px"} height={"50px"} border-radius={"30%"} backgroundColor={"red"} color={"white"} mult={1} name="+1"/>
        <CountButton width={"100px"} height={"100px"} border-radius={"30%"} backgroundColor={"blue"} color={"white"} mult={2} name="+2"/>
        <hr />
        <p><a id="link" href="https://github.com/kylezoellner/reactassignment">My Github Repo</a></p>
        <hr />
        <SearchBar />
    </div>
  )
}
