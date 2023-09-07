import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
// import Navbar from "../RRDV6/Navbar";


function NestedAsyn() {
  const [userDetails, setUserDetails] = useState([]);
  const [isLoadingUserDetails, setIsLoadingUserDetails] = useState(false);
  const userID = [4, 5, 7]
  const fetchedUserData = [];

  // const [limit, setLimit] = useState(5);

  useEffect(() => {
    async function fetchData() {
      try {
        fetch('https://fakestoreapi.com/users')
          .then((response) => response.json())
          .then(async (data) => {
          

            for (let i = 0; i < data.length; i++) {
              if (userID.includes(data[i].id)) {
                await fetch(`https://fakestoreapi.com/users/${data[i].id}`)
                  .then((response) => response.json())
                  .then((d) => {
                    fetchedUserData.push(d);
                    console.log(fetchedUserData)
                  });
              }
            }
            setUserDetails(fetchedUserData);
            setIsLoadingUserDetails(false);
          })

        // try { fetch(`https://fakestoreapi.com/users?limit=${limit}`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //       setUserDetails(data);
        //       console.log(data);
        //     })
        // setIsLoadingUserDetails(true)
        //  ('https://fakestoreapi.com/users')
        // .then((response) => response.json())
        // .then((data) => {
        //   console.log(data)


        // fetch('https://fakestoreapi.com/users')
        //   .then((response) => response.json())
        //   .then(async(data) => {
        //     const first5UserIDs = [];
        //     for (let i = 0; i < 5 && i < data.length; i++) {
        //       // first5UserIDs.push(data[i].id);  
        //       await fetch(`https://fakestoreapi.com/users/${data[i].id}`).then((response) => response.json())
        //       .then((d)=>{
        //         console.log(d)
        //         first5UserIDs.push(d)
        //       })
        //     }
        // setUserDetails(first5UserIDs)
        // console.log(first5UserIDs)
        // Promise.all(
        //   first5UserIDs.map((userID) =>
        //     fetch(`https://fakestoreapi.com/users/${userID}`)
        //       .then
        //   )
        // )
        // .then((detailData) => {
        //   setUserDetails(detailData);
        //  setIsLoadingUserDetails(false);
        // })
        // .catch((error) => {
        //   console.error("Error fetching user details:", error);
        //   setIsLoadingUserDetails(false);
        // });
        // }
        // )

      }
      catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoadingUserDetails(false);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  // const nextapi = () => { 
  //   setLimit((limit) => limit + 5);
  // };

  console.log(userDetails)
  return (<>
   
    <div>
      <h1>User Data</h1>

      {isLoadingUserDetails ? (
        <Spinner/>
      ) : (
        userDetails.length > 0 &&
        (
          <div className="user-row">
            {userDetails.map((userDetail) => (

              <div key={userDetail.id} className="user-card">
                <h2>User Detail</h2>
                <p>ID: {userDetail.id}</p>
                <p>Email: {userDetail.email}</p>
                <p>Username: {userDetail.username}</p>
                <p>Password: {userDetail.password}</p>
                <p>Phone: {userDetail.phone}</p>
                <p>Number: {userDetail.address.number}</p>
                <p>Street: {userDetail.address.street}</p>
                <p>City: {userDetail.address.city}</p>
                <p>Zipcode: {userDetail.address.zipcode}</p>
                <p>Geolocation:</p>
                <p>Lat: {userDetail.address.geolocation.lat}</p>
                <p>Long: {userDetail.address.geolocation.long}</p>
              </div>

            ))}
          </div>

        )
      )}
      {/* <button onClick={nextapi}>Next</button> */}
    </div></>
  );
}

export default NestedAsyn;
