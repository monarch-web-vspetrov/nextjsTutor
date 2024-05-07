import Card from "@/app/components/card";
import Link from "next/link";

function ArchivedNotification() {
    return (
        <Card>
            <p>ArchivedNotification</p>
            <Link href="/complexDashboard/">Default</Link>
        </Card>
    );
}

export default ArchivedNotification;