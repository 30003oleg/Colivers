interface Props {
  className?: string;
}

export const LobbyPage: React.FC<Props> = (props: Props) => {
  const { className } = props;

  return <div className={className}>123</div>;
};
