import type { FunctionComponent } from "react";
import { Button, Card, Space, Spin, Typography } from "antd";
import "./main.css";
import ExclamtionCircle from "./exclamation-circle.svg";
import CheckCircle from "./check-circle.svg";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React from "react";

export interface AlertSystemProps {
  loading?: boolean;
  title?: string | React.ReactNode;
  exclamationTitle?: string | number;
  exclamationValue?: string | number;
  checkTitle?: string | number;
  checkValue?: string | number;
  collapsible?: boolean;
}

const CardAlertSystem: FunctionComponent<AlertSystemProps> = ({
  loading = false,
  title = "Alert System",
  exclamationTitle = "Pemakaian Air",
  exclamationValue = "0 m3",
  checkTitle = "Tekanan Air",
  checkValue = "0 m3",
  collapsible = true,
}) => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <Card
      title={title}
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
          <Space direction="vertical" size={"middle"}>
            <Space size={"middle"}>
              <img alt="exclamation" src={ExclamtionCircle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.45)" }}
                >
                  {exclamationTitle}
                </Typography>

                <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                  {exclamationValue}
                </Typography>
              </div>
            </Space>
            <Space size={"middle"}>
              <img alt="exclamation" src={CheckCircle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.45)" }}
                >
                  {checkTitle}
                </Typography>

                <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                  {checkValue}
                </Typography>
              </div>
            </Space>
          </Space>
        </Spin>
      </div>
    </Card>
  );
};

export default CardAlertSystem;
