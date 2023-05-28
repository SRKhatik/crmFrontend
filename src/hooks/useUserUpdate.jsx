import React from "react";
import { useState } from "react";
import { updateUser } from "../api/user";

const useUsersUpdate=()=>{

    const [usersUpdateModal, setUsersUpdateModal] = useState(false);
    const [selectedCurrUser, setSelectedCurrUser]=useState(false);


    const closeUsersUpdateModal=()=>{
        setUsersUpdateModal(false);
    }

    const editUser=(userDetail)=>{
        setSelectedCurrUser(userDetail);
        setUsersUpdateModal(true);

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

    return {usersUpdateModal, selectedCurrUser, closeUsersUpdateModal, editUser, changeUserDetails, updateUserFn};
}



export default useUsersUpdate;