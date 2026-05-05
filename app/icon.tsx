import { ImageResponse } from "next/og";

// Favicon for the browser tab. Next.js auto-generates the favicon from this
// file at build time. Replace with a real logo image (app/icon.png) once
// branding is finalized.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#378ADD", // brand.blue
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 600,
          borderRadius: 6,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        T
      </div>
    ),
    size
  );
}
