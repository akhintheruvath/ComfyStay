import LandingPageBody from "../../components/User/LandingPageBody";
import PropertyCategories from "../../components/User/PropertyCategories";
import UserFooter from "../../components/User/UserFooter";
import UserHeader from "../../components/User/UserHeader";

function LandingPage() {
    return (
        <>
            <UserHeader />
            <PropertyCategories />
            <LandingPageBody />
            <UserFooter />
        </>
    );
}

export default LandingPage;