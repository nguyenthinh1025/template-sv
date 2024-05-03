import React, { useEffect } from "react";
import { history } from "../../App";
import { useState } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

export default function Login(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (value) => {
      //   if (value.username === "admin" && value.password === "1234") {
      //     const action1 = {
      //       type: "LOGOUT_ADMIN",
      //       admin: localStorage.setItem("admin", "admin"),
      //     };
      //     await dispatch(action1);
      //     props.history.push("/adminstatistical");
      //     const Toast = Swal.mixin({
      //       toast: true,
      //       position: "top-end",
      //       showConfirmButton: false,
      //       timer: 3000,
      //       timerProgressBar: true,
      //       didOpen: (toast) => {
      //         toast.addEventListener("mouseenter", Swal.stopTimer);
      //         toast.addEventListener("mouseleave", Swal.resumeTimer);
      //       },
      //     });
      //     Toast.fire({
      //       icon: "success",
      //       title: `Đăng nhập thành công`,
      //     });
      //   } else {
      //     const action = LoginModeratorAction(value, props);
      //     dispatch(action)
      //   }
    },
  });

  return (
    <div className="theme-layout">
      <div className="authtication bluesh high-opacity">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(https://xettuyen.hvpnvn.edu.vn/static/VWA_Cover2.618118a5.png)" }}
        />

          <div
            className="welcome-box"
            style={{ zIndex: "99!important", opacity: 1 ,  height:"100%"}}
          >
            <img
              src="https://xettuyen.hvpnvn.edu.vn/static/VWA_Cover2.618118a5.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            
          </div>
      </div>
      <div className="auth-login">
        <div className="logo">
          <img src="images/logo.png" alt />
          <span>VWA</span>
        </div>
        <div className="mockup left-bottom">
          <img src="images/mockup.png" alt />
        </div>
        <div className="verticle-center">
          <div className="login-form">
            <h4>
              <i className="icofont-key-hole" /> Đăng nhập
            </h4>
            <form
              method="post"
              className="c-form"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                placeholder="Tài khoản"
                name="username"
                onChange={formik.handleChange}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={formik.handleChange}
              />
              {/* <div className="checkbox">
                                <input type="checkbox" id="checkbox" defaultChecked />
                                <label htmlFor="checkbox"><span>Nhớ tài khoản</span></label>
                            </div> */}

              <button
                className="main-btn"
                type="submit"
                style={{
                  margin: "0 auto",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i className="icofont-key" style={{ padding: "7px" }} />{" "}
                <span style={{ fontSize: "16px" }}>Đăng nhập</span>
              </button>
              <div
                style={{
                  margin: "0 auto",
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 0 0 0",
                  color: "#088dcd",
                  fontWeight: "bold",
                }}
              >
                Quên mật khẩu?
              </div>
            </form>
            <hr />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                className="main-btn-1"
                type="submit"
                style={{ border: "2px solid #088dcd", color: "white",fontSize: "16px" }}
              >
                {" "}
                Đăng ký tài khoản
              </button>
            </div>
          </div>
        </div>
        <div className="mockup right">
          <img src="images/star-shape.png" alt />
        </div>
      </div>
    </div>
  );
}
