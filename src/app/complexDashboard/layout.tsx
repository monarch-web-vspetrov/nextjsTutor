
import Analytics from "./@analytics/page";
import Metric from "./@metric/page";
import Notification from "./@notification/page";

export default function Layout({children, analytics, metric,notification}: {children: React.ReactNode, analytics: React.ReactNode, metric: React.ReactNode, notification: React.ReactNode}) {
    return (
        <section>
            {children}
            <div style={{display:"flex"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div>
                        {analytics}
                    </div>
                    <div>
                        {metric}
                    </div>
                </div>
                <div style={{display:"flex", flex: 1}}>
                    {notification}
                </div>
            </div>
        </section>
    );
}