type NothingItemProps = {
  x: number
  y: number
  isOrganized: boolean
}

export default function NothingItem({ x, y, isOrganized }: NothingItemProps) {
  return (
    <span
      className={`span-fade-in mx-1 leading-5`}
      style={{
        ...(!isOrganized && { position: "absolute", left: x, top: y })
      }}
    >
      nothing
    </span>
  )
}
