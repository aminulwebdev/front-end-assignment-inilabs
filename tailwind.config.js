tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#050038",
        secondary: "#4262FF",
      },
      maxWidth: {
        container: "1140px",
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
        'inter': "'Inter', sans-serif",
        'helt': 'Helvetica, Arial, sans-serif',
      },
      backgroundImage: {
        'banner': " linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/banner.jpg')",
      }
    }
  }
}