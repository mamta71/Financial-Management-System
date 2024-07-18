"use client";
import React, { useState } from "react";
import profileImage from "../../assets/images/users/avatar.jpg";
import { Dropdown } from "flowbite-react";
import CreateuserModal from "./components/CreateuserModal";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import ProfileuserModal from "./components/ProfileuserModal";
import { Button, Modal } from "flowbite-react";

const UserPage = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "User", link: "/user" },
    { label: "list", link: null },
  ];
  
  // add modal
  const [showUserModal, setShowUserModal] = useState(false);

  const handleShowUserModal = () => {
    setShowUserModal(true);
  };
  const handleCloseUserModal = () => {
    setShowUserModal(false);
  };

  // edit modal
  const [showProfileModal, setShowProfileModal] = useState(false);


  
  const handleShowProfileModal = () => {
    setShowProfileModal(true);
  };
  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };


  return (
    <>
      <Breadcrumb breadcrumbData={breadcrumbItems} />

      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
          <a
            onClick={handleShowUserModal}
            className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </a>
          <a
            className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
            href="#"
          >
            Add New User
          </a>

          {/* Show create user modal */}
          { <CreateuserModal
            show={showUserModal}
            onCloseModal={handleCloseUserModal}
          /> }

          {/* <>
            <Button onClick={() => setShowProfileModal(true)}>Toggle modal</Button>
            <Modal
              dismissible
              show={showProfileModal}
              size="md" 
              onClose={() => setShowProfileModal(false)}
            >
              <Modal.Header  className="text-xl font-medium bg-gray-700">Terms of Service</Modal.Header>
              <Modal.Body className=" flex items-center justify-center w-full bg-[#1A384B] dark:bg-[#1A384B]">
              <div className="bg-[#1A384B] dark:bg-[#1A384B] rounded-lg  py-6 max-w-md">

              <form action="#">
                    <div className="mb-4">
                      <label
                        for="name"
                        className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
                      >
                        UserName
                      </label>
                      <input
                        type="name"
                        id="name"
                        className="shadow-sm text-black rounded-md w-full px-4 py-2 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-pink-800 focus:border-pink-800"
                        placeholder="Enter your Name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        for="Profile"
                        className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
                      >
                        Edit Profile
                      </label>
                      <input
                        className="relative bg-gray-200 m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        id="formFileSm"
                        type="file"
                      />
                    </div>
                  </form>
                  </div>
              </Modal.Body>
              <Modal.Footer className="flex justify-end p-4 bg-[#1A384B] rounded-lg  border-t border-white-200">
                <Button color="gray"  className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={() => setShowProfileModal(false)} >
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </> */}
        </div>

        {/* user container */}
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          ></a>
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Rahul Pandey
          </h4>
          <p className="text-white/50">55 members</p>

          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item onClick={() => setShowProfileModal(true)}>
                  View
                </Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
              </Dropdown>
             

{/* Show Edit Profile modal */}
{ <ProfileuserModal showProfileModal={showProfileModal} setShowProfileModal={setShowProfileModal}
            show={showProfileModal} 
            onCloseModal={handleCloseProfileModal}
          /> }             
            </div>
          </div>

          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          ></a>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Gaurav
          </h4>
          <p className="text-white/50">132 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Sarita
          </h4>
          <p className="text-white/50">207 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-red-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Avin
          </h4>
          <p className="text-white/50">105 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Suraya
          </h4>
          <p className="text-white/50">67 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Gautam
          </h4>
          <p className="text-white/50">83 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Preety
          </h4>
          <p className="text-white/50">108 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
