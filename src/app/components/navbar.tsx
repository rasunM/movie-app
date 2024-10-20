import Link from 'next/link';
import navStyles from './navbar.module.css'
import { CiSearch } from "react-icons/ci";

export default function navbar() {
  return (
    <div className={navStyles.nav}>
        <div className={navStyles.subNav}>
            <Link href={"/"} style={{textDecoration:'none'}}>
                <div className={navStyles.navItem}>
                    Home
                </div>
            </Link>
            <Link href={"/movies"} style={{textDecoration:'none'}}>
                <div className={navStyles.navItem}>
                    Movies
                </div>
            </Link>
            <Link href={"/movies/search"} style={{textDecoration:'none'}}>
                <div className={navStyles.navItemSearch}>
                    <div className={navStyles.searchIcon}>
                        <CiSearch size={20}/>
                    </div>
                    <div className={navStyles.searchText}>
                            Search your movie ...
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}
