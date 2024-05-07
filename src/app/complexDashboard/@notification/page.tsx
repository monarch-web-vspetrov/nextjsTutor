    import Card from "@/app/components/card";
    import Link from "next/link";

    function Notification() {
        return (
            <Card>
                <p>Notification</p>
                <Link href="/complexDashboard/archived">archived</Link>
            </Card>
        );
    }

    export default Notification;