import Link from 'next/link'
// import Head from 'next/head'





function Navbar4() {
    return (
        <>
            <nav className="pro_navbar_main_container">
            
              <div className="pro_navbar_mb_sm pro_navbar_mb_lg pro_navbar_mb_lg">
                <div className="pro_navbar_mb_header">
                  <h1 className="pro_navbar_brand_mb">Thapapay</h1>
                  <span className="pro_navbar_mb_btn">
                    <ion-icon id="icon_menu" name="menu-outline" />
                    <ion-icon id="icon_close" name="close-outline" />
                  </span>
                </div>
                <div className="pro_navbar_mb_main-content">
                  <ul className="pro_navbar_page-menu_mb">
                    <li>
                      <div className="pro_toggle_navbar_mb">
                      <Link href="redux">
                            <ion-icon name="home-outline" className="mb_icons" />
                      </Link>
                        
                        <span className="mb_items">Home</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="logo-tiktok" className="mb_icons" />
                        <span className="mb_items">Sorts</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="chatbubbles-outline" className="mb_icons" />
                        <span className="mb_items">Messages</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="notifications-outline" className="mb_icons" />
                        <span className="mb_items">Notifications</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="notifications-outline" className="mb_icons" />
                        <span className="mb_items">Notifications</span>
                      </div>
                    </li>                        
                  </ul>
                  <ul className="pro_navbar_toggle-menu_mb">
                    <div className="wrapper" />
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="home-outline" className="mb_icons" />
                        <span className="mb_items">Home</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="logo-tiktok" className="mb_icons" />
                        <span className="mb_items">Sorts</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="chatbubbles-outline" className="mb_icons" />
                        <span className="mb_items">Messages</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="notifications-outline" className="mb_icons" />
                        <span className="mb_items">Notifications</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="library-outline" className="mb_icons" />
                        <span className="mb_items">Library</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="albums-outline" className="mb_icons" />
                        <span className="mb_items">Time</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="ellipsis-horizontal" className="mb_icons" />
                        <span className="mb_items">Menu</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb">
                        <ion-icon name="crop" className="mb_icons" />
                        <span className="mb_items">Crop</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="pro_navbar_sub-menu_mb">
                    <li>
                      <div className="pro_toggle_navbar_mb mb_list1">
                        <ion-icon name="home-outline" className="mb_icons" />
                        <span className="mb_items">Home</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb mb_list2">
                        <ion-icon name="ellipsis-horizontal" className="mb_icons" />
                        <span className="mb_items">Menu</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb mb_list3">
                        <span className="color">Colors</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb mb_list4">
                        <ion-icon name="crop" className="mb_icons" />
                        <span className="mb_items">Crop</span>
                      </div>
                    </li>
                    <li>
                      <div className="pro_toggle_navbar_mb mb_list5">
                        <ion-icon name="move" className="mb_icons" />
                        <span className="mb_items">Move</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /////////////////////////  End  ///////////////////////////*/}
            </nav>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id='nav2'>
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Emon</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                          <ion-icon id="navbar2-mb_close" name="close-outline"></ion-icon>
                          <ion-icon class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" id="navbar2-mb_menu" name="menu-outline"></ion-icon>
                          
                      </button> */}
                <span id="toggler-btn">
                  <ion-icon className="navbar-toggler" id="menu" name="menu-outline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" />
                  {/* <ion-icon id="navbar2_close" name="close-outline" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></ion-icon> */}
                </span>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    
                    <Link href="/">
                        <a className="nav-link active" aria-current="page">Home</a>
                    </Link>
                    
                    </li>
                    <li className="nav-item">
                     <Link href="redux">
                        <a className="nav-link active" aria-current="page">Redux</a>
                    </Link>
                    
                    </li>
                    <li className="nav-item">
                     <Link href="/login">
                        <a className="nav-link active" aria-current="page">Login</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                     <Link href="/django">
                        <a className="nav-link active" aria-current="page">Django</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/goals">
                        <a className="nav-link active" aria-current="page">Goals</a>
                    </Link>

                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
        </>
    );
};


export default Navbar4;