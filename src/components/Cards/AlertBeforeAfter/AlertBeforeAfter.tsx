/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from "react";
import { Button, Card, Spin, Typography } from "antd";
import {
  ArrowRightOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import "../main.css";
import React from "react";

export interface AlertBeforeAfterProps {
  loading?: boolean;
  titleBefore?: string;
  valueBefore?: string | number;
  titleAfter?: string;
  valueAfter?: string | number;
  collapsible?: boolean;
}

const AlertBeforeAfter: FunctionComponent<AlertBeforeAfterProps> = ({
  loading,
  valueBefore = "0 m3",
  valueAfter = "0 m3",
  titleAfter = "Interval After",
  titleBefore = "Interval Before",
  collapsible = true,
}) => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <Card
      title="Pemakaian Tenant"
      style={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
      }}
      bodyStyle={{ paddingTop: "16px", paddingBottom: "16px" }}
      extra={
        collapsible && (
          <Button
            icon={
              !collapse ? (
                <DownOutlined
                  style={{
                    color: "#1890FF",
                  }}
                />
              ) : (
                <UpOutlined
                  style={{
                    color: "#1890FF",
                  }}
                />
              )
            }
            size={"small"}
            style={{
              background: "#E6F7FF",
              border: "1px solid #E6F7FF",
            }}
            shape="circle"
            onClick={() => setCollapse(!collapse)}
          />
        )
      }
    >
      <div className={"collapse" + (collapse ? "" : " open")}>
        <Spin spinning={loading}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.45)" }}
              >
                {titleBefore}
              </Typography>

              <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                {valueBefore}
              </Typography>
            </div>
            <div>
              <ArrowRightOutlined
                style={{
                  color: "#429C46",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.45)" }}
              >
                {titleAfter}
              </Typography>

              <Typography
                style={{ fontSize: 16, fontWeight: "bold", color: "#429C46" }}
              >
                {valueAfter}
              </Typography>
            </div>
          </div>
        </Spin>
      </div>
    </Card>
  );
};

export default AlertBeforeAfter;
