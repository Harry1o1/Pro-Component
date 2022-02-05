import Link from 'next/link'
// import Head from 'next/head'





function Navbar12() {
    return(<>
            
              {/* ///////////////////////////////// Pc /////////////////////////////////////*/}
              {/* Top navigation */}
              <nav id="pc_navbar_top">
                {/* Menu icon  will update soon...*/}
                <ion-icon name="menu-outline" className="pc-navbartop-icons" id="menu-icon" />    
                {/* Logo + Global-area or something  */}
                <h1 id="pc-navbartop-brand">1thing</h1>
                {/* Searchbar from boostrap */}
                {/* <form id="navbar-top-form">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  id="searchbar"/>
              <ion-icon name="search-outline" class="pc-navbartop-icons" id="search-icon" ></ion-icon>    
              
             </form> */}
                {/* Tools */}
                {/*  <div id="pc_navbartop_tools"> */}
                {/* Voicesearch */}
                <ion-icon name="mic-outline" className="pc-navbartop-icons" id="voicesearch-icon" />
                {/* Rocket */}
                <ion-icon name="rocket-outline" className="pc-navbartop-icons" id="rocket-icon" />
                {/* All apps */}
                <ion-icon name="apps-outline" className="pc-navbartop-icons" id="allapps-icon" />
                {/* Notifications */}
                <ion-icon name="notifications-outline" className="pc-navbartop-icons" id="notifications-icon" />    
                {/* Dropdown */}
                <ion-icon name="caret-down-outline" className="pc-navbartop-icons" id="dropdown-icon" />
                {/* Profile */}
                <ion-icon name="person-circle-outline" className="pc-navbartop-icons" id="profile-icon" />
                {/*   </div>   */}
              </nav>    
              {/* Left navigation */}
              <nav className="sclass" id="pc_navbar_left">
                <ul>
                  <li>
                    <ion-icon name="albums-outline" />
                  </li>
                  <li>
                    <ion-icon name="aperture-outline" />
                  </li>
                  <li>
                    <ion-icon name="barbell-outline" />
                  </li>
                  <li>
                    <ion-icon name="brush-outline" />
                  </li>
                  <li>
                    <ion-icon name="caret-down-outline" />
                  </li>
                  <li>
                    <ion-icon name="color-wand-outline" />
                  </li>
                  <li>
                    <ion-icon name="contrast-outline" />
                  </li>
                  <li>
                    <ion-icon name="cloud-download-outline" />
                  </li>
                  <li>
                    <ion-icon name="chatbubbles-outline" />
                  </li>
                  <li>
                    <ion-icon name="cellular-outline" />
                  </li>
                  <li>
                    <ion-icon name="home-outline" />
                  </li>
                  <li>
                    <ion-icon name="heart-outline" />
                  </li>
                  <li>
                    <ion-icon name="hardware-chip-outline" />
                  </li>
                  <li>
                    <ion-icon name="git-compare-outline" />
                  </li>
                  <li>
                    <ion-icon name="game-controller-outline" />
                  </li>
                  <li>
                    <ion-icon name="git-branch-outline" />
                  </li>
                  <li>
                    <ion-icon name="flask-outline" />
                  </li>
                  <li>
                    <ion-icon name="flame-outline" />
                  </li>
                  <li>
                    <ion-icon name="flag-outline" />
                  </li>
                  <li>
                    <ion-icon name="fish-outline" />
                  </li>
                  <li>
                    <ion-icon name="earth-outline" />
                    {/* <ion-icon name="earth"></ion-icon> */}
                  </li>
                  <li>
                    <ion-icon name="compass-outline" />
                  </li>
                  <li>
                    <ion-icon name="book-outline" />
                  </li>
                  <li>
                    <ion-icon name="attach-outline" />
                  </li>
                </ul>
              </nav>
              {/* ///////////////////////////////// Pc Navbar End /////////////////////////////////////*/}
              {/* ///////////////////////////////// Mb /////////////////////////////////////*/}
              <nav id="mb_navbar_top">
                <div id="mb_navbartop_header">
                  {/* Profile */}
                  <ion-icon name="person-circle-outline" className="mb-navbartop-icons" id="profile-icon-mb" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />
                  {/* Dropdown */}
                  <ion-icon name="caret-down-outline" className="mb-navbartop-icons" id="dropdown-icon-mb" />
                  <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasRightLabel">Offcanvas left</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                  </div>    
                  {/* All apps */}
                  {/* <ion-icon name="apps-outline" class="mb-navbartop-icons" id="allapps-icon-mb"></ion-icon> */}
                  <div id="nine_dots">
                    <span id="hh" style={{"--i":"0","--x":"-1","--y":"0"}}>
                      <ion-icon name="home-outline" />        
                    </span>
                    <span id="hh" style={{"--i":"1","--x":"1","--y":"0"}}>
                      <ion-icon name="telescope-outline" />
                    </span>
                    <span id="hh" style={{"--i":"2","--x":"0","--y":"-1"}}>
                      <ion-icon name="logo-android" />
                    </span>
                    <span id="hh" style={{"--i":"3","--x":"0","--y":"1"}}>
                      <ion-icon name="logo-css3" />
                    </span>
                    <span id="hh" style={{"--i":"4","--x":"1","--y":"1"}}>
                      <ion-icon name="logo-facebook" />
                    </span>
                    <span id="hh" style={{"--i":"5","--x":"-1","--y":"-1"}}>
                      <ion-icon name="logo-github" />
                    </span>
                    <span id="hh" style={{"--i":"6","--x":"0","--y":"0"}}>
                      <ion-icon name="logo-google-playstore" />
                    </span>
                    <span id="hh" style={{"--i":"7","--x":"-1","--y":"1"}}>
                      <ion-icon name="logo-google" />
                    </span>
                    <span id="hh" style={{"--i":"8","--x":"1","--y":"-1"}}>
                      <ion-icon name="logo-figma" />
                    </span>
                    <ion-icon name="close-outline" id="cancel_web" />
                  </div>
                  {/* Voicesearch */}
                  <ion-icon name="mic-outline" className="mb-navbartop-icons" id="voicesearch-icon" />
                  {/* Brand 🐥🐥🐥 */}
                  <h1 id="mb_navbartop_brand">
                    1 thing
                  </h1>
                  {/* Search 🐥🐥🐥 */}
                  <ion-icon name="search-outline" className="mb-navbartop-icons" id="search-icon" />    
                  {/* Rocket */}
                  <ion-icon name="rocket-outline" className="mb-navbartop-icons" id="rocket-icon-mb" />
                  {/* Notifications */}
                  <ion-icon name="notifications-outline" className="mb-navbartop-icons" id="notifications-icon-mb" />    
                  {/* Menu icon  will update soon...*/}
                  <ion-icon name="menu-outline" className="mb-navbartop-icons" id="menu-icon-mb" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />    
                  {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                      ...
                      y8vy8c7y7tc8tct7c7tt7c8tc7t
                    </div>
                  </div>
                </div>
                <div id="mb_navbartop_scroll-container">
                  <ul id="mb_navbartop_scroll">
                    
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    
                    <li id="mb_navbartopscroll_pages_last">
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    
                    
                  </ul>
                </div>
              </nav>    
              <nav id="mb_navbar_bottom">
                <ul>
                  <li>
                    {/* Home */}
                    <ion-icon name="home-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                    {/* <ion-icon name="home" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
                  </li>
                  <li>
                    {/* Shorts */}
                    <ion-icon name="flash-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                    {/* <ion-icon name="flash" class="mb_navbarbottom_icons  mb_navbarbottom_icons_hovered"></ion-icon> */}
                  </li>
                  <li>
                    {/* Add */}
                    <ion-icon name="add-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                    {/* <ion-icon name="add" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
                  </li>
                  <li>
                    {/* Subscription */}
                    <ion-icon name="earth-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                    {/* <ion-icon name="earth" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
                  </li>
                  <li>
                    {/* Library */}
                    <ion-icon name="library-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                    {/* <ion-icon name="library" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
                  </li>
                </ul>
              </nav>
              {/* ///////////////////////////////// Mb Navbar End /////////////////////////////////////*/}

    
    
    
    
    
    </>);
};


export default Navbar12;






