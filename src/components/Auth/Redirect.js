import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTrue } from "../../reducer/boolean";

function Redirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "https://kauth.kakao.com/oauth/token", 
          new URLSearchParams({
            grant_type: "authorization_code",
            client_id: process.env.REACT_APP_RESTAPI_KEY,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            code: code,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem("id_token", res.data.id_token);

        localStorage.setItem("logged", JSON.stringify(true));
        dispatch(setTrue());

        console.log("로그인 성공");
        navigate('/netflix-demo');
      } catch (error) {
        console.error("리디렉션 중 오류 발생, 로그인 실패", error);
      }
    };

    fetchData();
  }, [code]);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
}

export default Redirect;
