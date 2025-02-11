import React, { useState } from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

const Genealogy = () => {
    const [expandedNodes, setExpandedNodes] = useState({});

    const toggleNode = (nodeId) => {
        setExpandedNodes((prevState) => ({
            ...prevState,
            [nodeId]: !prevState[nodeId],
        }));
    };

    const renderTree = (node) => {
        const isExpanded = expandedNodes[node.id];
        const hasReferrals = node.referrals && node.referrals.length > 0;

        return (
            <TreeView
                key={node.id}
                nodeLabel={
                    <div
                        className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-100 rounded"
                        onClick={() => toggleNode(node.id)}
                    >
                        <img
                            src={node.photo}
                            alt={node.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <span className="font-medium text-lg">{node.name}</span>
                    </div>
                }
                collapsed={!isExpanded}
            >
                {hasReferrals && node.referrals.map((referral) => renderTree(referral))}
            </TreeView>
        );
    };

    const datasource = {
        id: 1,
        name: "CEO",
        photo: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
        referrals: [
            {
                id: 2,
                name: "Manager 1",
                photo: "https://plus.unsplash.com/premium_photo-1661369539084-27dc45c82f15?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww",
                referrals: [
                    {
                        id: 3,
                        name: "Senior Emp",
                        photo: "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg",
                        referrals: [
                            { id: 8, name: "Worker 1", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
                            { id: 9, name: "Worker 2", photo: "https://randomuser.me/api/portraits/women/2.jpg" },
                        ],
                    },
                    {
                        id: 4,
                        name: "Senior Emp",
                        photo: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
                        referrals: [
                            { id: 10, name: "Worker 3", photo: "https://randomuser.me/api/portraits/men/3.jpg" },
                            { id: 11, name: "Worker 4", photo: "https://randomuser.me/api/portraits/women/4.jpg" },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: "Manager 2",
                photo: "https://img.freepik.com/free-photo/portrait-happy-businesswoman-her-employees-background_1262-20305.jpg",
                referrals: [
                    {
                        id: 6,
                        name: "Senior Emp",
                        photo: "https://static.vecteezy.com/system/resources/thumbnails/014/930/139/small/cheerful-female-employee-types-on-laptop-computer-works-remotely-concentrated-with-smile-at-device-screen-writes-email-letter-works-in-office-drinks-coffee-uses-new-application-technology-concept-photo.JPG",
                        referrals: [
                            { id: 12, name: "Worker 5", photo: "https://randomuser.me/api/portraits/men/5.jpg" },
                            { id: 13, name: "Worker 6", photo: "https://randomuser.me/api/portraits/women/6.jpg" },
                        ],
                    },
                    {
                        id: 7,
                        name: "Senior Emp",
                        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxe097xgIuRJ3O6kLNFxj69adDgSCKWysgg&s",
                        referrals: [
                            { id: 14, name: "Worker 7", photo: "https://randomuser.me/api/portraits/men/7.jpg" },
                            { id: 15, name: "Worker 8", photo: "https://randomuser.me/api/portraits/women/8.jpg" },
                        ],
                    },
                ],
            },
        ],
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Referral Oriented Programs</h1>
            <div className="bg-white shadow-md rounded-lg p-4">{renderTree(datasource)}</div>
        </div>
    );
};

export default Genealogy;