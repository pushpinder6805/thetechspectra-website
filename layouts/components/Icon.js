export default function Icon({ name = "arrow", size = 22, ...props }) {
  const paths = {
    arrow: "M7 17 17 7M7 7h10v10",
    code: "m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12",
    globe:
      "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18Z",
    app: "M4 4h7v7H4ZM15 4h5v7h-5ZM4 15h7v5H4Zm11 0h5v5h-5Z",
    phone:
      "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 16h2",
    game: "M7 8h10a4 4 0 0 1 4 4l1 5a2 2 0 0 1-3 2l-3-3H8l-3 3a2 2 0 0 1-3-2l1-5a4 4 0 0 1 4-4Zm-1 4h4m-2-2v4m8-3h.01m2 2h.01",
    integration: "M8 3v4m8-4v4M5 7h14v4a7 7 0 0 1-7 7v4m-7-11a7 7 0 0 0 7 7",
    check: "m5 12 4 4L19 6",
    shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Zm-4 9 3 3 5-6",
    cloud: "M7 18a5 5 0 1 1 0-10 6 6 0 0 1 11-1 5 5 0 0 1 0 11Z",
    spark: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z",
    bot: "M12 8V4m-2 0h4M7 12h.01M17 12h.01M8 16h8M5 8h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z",
    database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
    search: "m20 20-4.5-4.5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
    chat: "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
