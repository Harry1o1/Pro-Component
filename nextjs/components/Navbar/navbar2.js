import Link from 'next/link'
// import Head from 'next/head'
import styles from '../../styles/Navbar2.module.css'





function Navbar2() {
    return (
        <>
        
                    {/* Fixed navbar */}
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar2</a>
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
            <div id="wrapper">
              <div className={styles.scrollmanu}>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    <a href className={styles.scrollmagic}> Page1 </a>
                    
                  
               </div>
               <div id="marker" />
            </div>
        </>
    );
};


export default Navbar2;