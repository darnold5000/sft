import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: "0.06em",
          fontFamily: "system-ui, Segoe UI, sans-serif",
        }}
      >
        SFT
      </div>
    ),
    { ...size },
  );
}
