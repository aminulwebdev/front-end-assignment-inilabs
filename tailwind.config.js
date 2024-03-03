tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand_clr: "#050038",
          secondary_clr: "#4262FF",
        },
        maxWidth: {
          container: "1140px",
        },
        fontFamily: {
          'poppins': "'Poppins', sans-serif",
          'inter': "'Inter', sans-serif",
        },
        backgroundImage: {
          'banner': " linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/banner.jpg')",
        }
      }
    }
  }