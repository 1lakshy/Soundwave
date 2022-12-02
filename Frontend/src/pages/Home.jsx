import React from 'react'
import Nav from "../components/SocialMedia/Nav/Nav.jsx";
import TopNav from "../components/Shared/TopNav/TopNav.jsx";
import PeopleNav from "../components/Shared/PeopleNav/PeopleNav.jsx";
import Content from "../components/SocialMedia/Content.jsx";

function Home() {
  return (
<>
<TopNav />
<PeopleNav />
<Content />
<Nav />
</>
  )
}

export default Home