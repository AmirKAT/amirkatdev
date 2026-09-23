import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AmirKAT — Websites and digital products, built properly.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const wordmark = await readFile(join(process.cwd(), "public/brand/wordmark.png"));
  const src = `data:image/png;base64,${wordmark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090807",
          padding: "72px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={420} height={61} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#A89F94", fontSize: 22, letterSpacing: "0.16em" }}>
            BUILD · SHIP · IMPROVE
          </div>
          <div
            style={{
              color: "#F9EFE2",
              fontSize: 64,
              lineHeight: 1.05,
              marginTop: 24,
              maxWidth: 920,
            }}
          >
            Websites and digital products, built properly.
          </div>
        </div>
        <div style={{ width: 72, height: 4, background: "#A3252C" }} />
      </div>
    ),
    { ...size },
  );
}
