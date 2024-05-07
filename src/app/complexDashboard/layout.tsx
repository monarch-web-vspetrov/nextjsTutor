export default function Layout({
  children,
  analytics,
  metric,
  notification,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  metric: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = false;

  return isLogin ? (
    <section>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{analytics}</div>
          <div>{metric}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </section>
  ) : (
    <div style={{ display: "flex" }}>{login}</div>
  );
}
