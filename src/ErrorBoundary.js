import React, { Component } from 'react'

const divstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '60px'
}

const imgstyle = {
  objectFit: 'cover',
  overflow: 'hidden',
  marginBottom: '60px'
}

const pstyle = {
  margin: '0'
}

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={divstyle}>
          <img style={imgstyle} src={'https://lh3.googleusercontent.com/fife/AAbDypDt25kOPgHTVdylHH3XkCRJ1RAyKSttRLgtWVa6liQxEzdWqmtCehV5WCj2luMUJHasElBXyf27qotyHYnxvz-CSXgKSAZwfQr6SYxHo0qP_-PzyoNR4TUzkV_45-9OqrYgn2sYvsL_o9TGnfBCYj4U8NVrvYvgsiNubQYkXBpKwnAnGgPhbI6bkU1ZmXNFfCRsCfAccEJEcx-az4Ip4IbwJ_iz56-Rk8xn1GXLmX3jH_zRLSVc-MOM8z1Ida3dYcHrxN_yG-L0TtFxGuiVgMmEieylfvczu_cVJ3Y4beQKEqezxl-sc1nZSeIc9Yz1oT_VUSxsKMks-aFg8Wy970_KA2MBTJWlaCxHyahQh3k5HpTLCCSkfpwDOLzu-5w-fOpJM3wNfIFuwkEFo2qTeZQdLYqJT_COrj1MhC1VeoYT6-7p_iYmobHuJ5TaIGtL0WvMtPXtq_ruJ9DwYsjxAFFVtYNvf8Ldswr_90kbC9XuGZcAAU4tFMYDZ5t9DmAx0vPynz1Wnud8YRTdA_mhTmbL0Xm72SmJ4poGSZJzN41dKpcwcejnPRyZzQsMinPkgY07rYQSVay_fjo3Oc-ue0Zy3Ih61pRtWLa-xp905nu8Jkf4Dn9qi_HlwL-UxXZHUq8mCNTvc-M7YOLN-mOzE8J2ePqUCfThkOOKZ4q2qUyjXlTwVkksiO6muBGbKjAjKXUXvWUB_J9skujYex6kuTRc21IiaxKgSwN98-ilaKvptOZqp1g68ENSkvdcmjn8EW5jGjkKcSIlH4kJUIPzYX1iBErz91JJi4QKoEbt8PECicy9h3RksMXnLCw0HGpjGuBOgibzlCJubbCEUIbmJDlYxWOaG5FtvrWyVrf6YSvL9hoznSvTGVdwWmn5Ihpb0KMK9WjIKcXEv5dNgykURKG96fwq6jiWBdPaPv71ojGRJAWcZvldKUr8KebJ4eITh5PvYw4KEyCnp7LEJduQqkJs4hQoYcoqM32gSW9oKLsusHboLL393mZjNc3VQNw3YnW_dq_epczLDyh4fxxHmDsDagv1CFCWaS8_cd_Jwi_clHyzd7v2S4EMIqupJt7pMm06NI2Darck5hFGHMrlF4YZRywmAXhR6u-G3d0qHGrJq2sc3BEGL1A2oIcfeapRaUP_L5-AcDWE83I6Vj5ETJcxHYDgEh24ZmcwrX3HT4an2QiyvyfWkoBREzADLaw7Uf1MCEX8HA_gF0g7MpbFnbYS6_6TQGSC4GTCPfaGNDoky_Fj1dhaSNPetiWgdkQ2chQc8jOZZELVvGwpXmsrNpsKcG6qeLZJQendiuqYkecTs1Y-TDsZSDid6P5M5MwlAQ717_hcsEt-HxyainQiMVzWC5a43c8Sq6HhJbid_Xb_lh0_X7b4LutBCVd_VYF6F06pDZeoGsTS7gHWuINyI_to4X-O3Vr1JNLN9QJ7vXZz9eVdiONy6n0YV5gdgSRP-arNzMLx6sn89Vu2NixWa0j9V34Flk3VVdF28TUpw-pkH0TiUq-STDs=w1920-h915'} alt="Something went wrong :(" />
          <h2>
            Aaaah! Something went wrong
          </h2>
          <p style={pstyle}>
            Brace yourself till we get the error fixed.
          </p>
          <p>
            You may also refresh the page or try again later
          </p>
        </div>

      );
    }
    return this.props.children
  }
}