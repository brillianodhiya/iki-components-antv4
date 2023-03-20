import React from "react";
import { Typography } from "antd";
import dayjs from "dayjs";

const { Text } = Typography;

export interface CardLastRefreshProps {
  date: Date;
}

const CardLastRefresh: React.FC<CardLastRefreshProps> = ({ date }) => {
  const formattedDate = dayjs(date).format("dddd MMMM YYYY HH:mm");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <Typography
          style={{
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          Last Refresh
        </Typography>
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.45)",
          }}
        >
          {formattedDate}
        </Text>
      </div>
    </div>
  );
};

export default CardLastRefresh;
