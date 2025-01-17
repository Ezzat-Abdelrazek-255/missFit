import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react";

const ICON_SIZE = 18;
const ICON_COLOR = "#93949f";

// Highlight Icon and Decorator
export const HighlightIcon = () => (
  <span style={{ fontWeight: "bold", color: ICON_COLOR }}>H</span>
);
export const HighlightDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => <span style={{ backgroundColor: "yellow" }}>{children}</span>;

// Alignment Icons and Decorators
export const LeftAlignIcon = () => (
  <span style={{ display: "grid", placeContent: "center" }}>
    <AlignLeft size={ICON_SIZE} color={ICON_COLOR} />
  </span>
);
export const RightAlignIcon = () => (
  <span style={{ display: "grid", placeContent: "center" }}>
    <AlignRight size={ICON_SIZE} color={ICON_COLOR} />
  </span>
);
export const CenterAlignIcon = () => (
  <span style={{ display: "grid", placeContent: "center" }}>
    <AlignCenter size={ICON_SIZE} color={ICON_COLOR} />
  </span>
);
export const LeftAlignDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => <p style={{ textAlign: "left" }}>{children}</p>;
export const RightAlignDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => <p style={{ textAlign: "right" }}>{children}</p>;
export const CenterAlignDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => <p style={{ textAlign: "center" }}>{children}</p>;

// Bullet List Icon and Decorator
export const BulletListIcon = () => (
  <span style={{ display: "grid", placeContent: "center" }}>
    <List size={ICON_SIZE} color={ICON_COLOR} />
  </span>
);
export const BulletListDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ul style={{ listStyle: "disc", paddingLeft: "3.2rem" }}>
    <li>{children}</li>
  </ul>
);

// Numbered List Icon and Decorator
export const NumberedListIcon = () => (
  <span style={{ display: "grid", placeContent: "center" }}>
    <ListOrdered size={ICON_SIZE} color={ICON_COLOR} />
  </span>
);
export const NumberedListDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ol
    style={{
      display: "inline-block",
      listStyleType: "decimal",
    }}
  >
    <li>{children}</li>
  </ol>
);
