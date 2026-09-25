import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.04em",
          fontFamily: "system-ui, Segoe UI, sans-serif",
        }}
      >
        SFT
      </div>
    ),
    { ...size },
  );
}
