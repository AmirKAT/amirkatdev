import { ImageResponse } from "next/og";

export const alt = "Amir Katal — Custom websites and digital products, without the agency overhead.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#090807",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#A89F94", fontSize: 22, letterSpacing: "0.16em" }}>
            BUILD · SHIP · IMPROVE
          </div>
          <div
            style={{
              color: "#F9EFE2",
              fontSize: 56,
              lineHeight: 1.08,
              marginTop: 24,
              maxWidth: 980,
            }}
          >
            Custom websites and digital products, without the agency overhead.
          </div>
        </div>
        <div style={{ width: 72, height: 4, background: "#A3252C" }} />
      </div>
    ),
    { ...size },
  );
}
