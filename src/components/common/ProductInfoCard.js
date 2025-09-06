import Image from "next/image";

export default function ProductInfoCard(props) {
  const {
    title,
    leftTitle,
    leftSubtitle,
    rightTitle,
    rightSubtitle,
    icon,
    iconAlt,
    backgroundColor = "bg-white/10",
    backdropBlur = false,
  } = props;
  return (
    <div
      className={`w-[360px] rounded-xl border border-gray-300 p-6 shadow-lg ${backdropBlur ? "backdrop-blur-md" : ""} ${backgroundColor}`}
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white">
          <Image
            src={icon}
            alt={iconAlt}
            width={28}
            height={28}
            className="h-auto w-auto object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <p className="mb-6 text-sm font-medium text-white">{title}</p>

      {/* Values with divider */}
      <div className="flex items-start justify-between text-white">
        {/* Left Side */}
        <div className="flex-1 pr-4">
          <p className="text-4xl leading-tight font-bold">{leftTitle}</p>
          <p className="mt-1 text-sm text-white/80">{leftSubtitle}</p>
        </div>

        {/* Divider */}
        <div className="h-14 w-px bg-white/40"></div>

        {/* Right Side */}
        <div className="flex-1 pl-4 text-right">
          <p className="text-4xl leading-tight font-bold">{rightTitle}</p>
          <p className="mt-1 text-sm text-white/80">{rightSubtitle}</p>
        </div>
      </div>
    </div>
  );
}
