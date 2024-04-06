import {useSelector} from "react-redux"

const Profile = () => {
    const user = useSelector((state) => state.auth.user)
    return (
        <div>
            <h3>Profile</h3>
            {user ? <h4>Hello, {user}.</h4> : null}
        </div>
    )
}

export default Profile;