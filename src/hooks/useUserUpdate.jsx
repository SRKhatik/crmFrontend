import React from "react";
import { useState } from "react";
import { updateUser } from "../api/user";
import { useNavigate,useLocation } from "react-router-dom";

const useUsersUpdate=()=>{
    const navigate = useNavigate();
    const location = useLocation()

    const [usersUpdateModal, setUsersUpdateModal] = useState(false);
    const [selectedCurrUser, setSelectedCurrUser]=useState(false);


    const closeUsersUpdateModal=()=>{
        setUsersUpdateModal(false);
        const url =`/admin`;
        navigate(url);
    }

    const setUserAndOpenModal =(userDetail)=>{
        setSelectedCurrUser(userDetail);
        setUsersUpdateModal(true)

    }

    const editUser=(userDetail)=>{
        setSelectedCurrUser(userDetail);
        setUsersUpdateModal(true);
        const url = `${location.pathname}/${userDetail.userId}`;
        navigate(url)

    }

    const changeUserDetails=(e)=>{

        if(e.target.name==="status"){
            selectedCurrUser.userStatus=e.target.value;
        }

        setSelectedCurrUser({...selectedCurrUser});
    }

    const updateUserFn=(e)=>{
        e.preventDefault();

        const userData={
            _id:selectedCurrUser._id,
            status:selectedCurrUser.userStatus
        }


        updateUser(userData)
        .then(res=>{
            if(res.status===200){
                console.log("User Updated Successfully");
                setUsersUpdateModal(false);
            }
        })
        .catch(err=>{
            console.log(err.message);
        })

    }

    return {usersUpdateModal, selectedCurrUser,setUserAndOpenModal, closeUsersUpdateModal, editUser, changeUserDetails, updateUserFn};
}



export default useUsersUpdate;