import profilePhoto from "./assets/images/johndoe.jpg";

function Profile() {
    return <div>
        <h1>Profile</h1>
        <div>
            <img src={profilePhoto} alt="" />
            <p>John Doe</p>
            <p>43 years</p>
            <p>Male</p>
            <p>5ft 10inch</p>
            <p>100 kg</p>
            <p>Obesity</p>
            <p>No medications</p>
            <p>A+</p>
            <p>Previous check up date</p>
        </div>
    </div>
}

export default Profile;