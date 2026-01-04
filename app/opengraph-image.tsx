import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#ffffff",
          color: "#0b0b0b",
          border: "24px solid #f3f4f6",
          borderRadius: 48,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
            Dipanka Tanu Sarmah
          </div>
          <div style={{ fontSize: 28, color: "#4b5563" }}>
            Computational Biology · Multi-omics · Network Biology · Machine Learning
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 22, color: "#6b7280" }}>
            Projects · Publications · Reproducible pipelines
          </div>

          <div
            style={{
              fontSize: 20,
              color: "#111827",
              padding: "10px 14px",
              border: "1px solid #e5e7eb",
              borderRadius: 999,
              background: "#fafafa",
            }}
          >
            dipankatanu.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
