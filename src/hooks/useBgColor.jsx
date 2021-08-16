import { useRouter } from 'next/dist/client/router';
import { useEffect, useMemo } from 'react'

export const useBgColor = () => {
  const router = useRouter()

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightBlue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname])
  
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [bgColor]);
}