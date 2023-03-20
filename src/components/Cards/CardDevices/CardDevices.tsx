import {
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Space,
  Spin,
  Tag,
  Typography,
} from "antd";
import React, { CSSProperties } from "react";
import { DevicesIcons } from "../../Icons/GatewayIcon";
import { DownOutlined, UpOutlined, WifiOutlined } from "@ant-design/icons";
import { OfflineIcon } from "../../Icons/OfflineIcon";
import "./CardDevices.css";

export interface CardDevicesProps {
  loading?: boolean;
  style?: CSSProperties;
  withNotification?: boolean;
  loadingNotification?: boolean;
  onClickNotification?: () => void;
  notifCount?: number;
  deviceTotal?: number;
  deviceOnline?: number;
  deviceOffline?: number;
  onClickViewDetail?: () => void;
  collapsible?: boolean;
}

const CardDevices: React.FC<CardDevicesProps> = ({
  loading = false,
  style = {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
  withNotification = false,
  loadingNotification = false,
  onClickNotification = () => {},
  notifCount = 0,
  deviceTotal = 0,
  deviceOnline = 0,
  deviceOffline = 0,
  onClickViewDetail = () => {},
  collapsible = false,
}) => {
  const [collapseDevice, setCollapseDevice] = React.useState(false);

  return (
    <Card
      bodyStyle={{
        padding: "20px 24px",
      }}
      style={{
        ...style,
      }}
    >
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Devices
            </Typography>
            <Space size={"large"} wrap>
              {withNotification && (
                <Spin spinning={loadingNotification}>
                  <Space
                    style={{
                      background: "#FFF7E6",
                      borderRadius: 8,
                      border: "1px solid #FFD591",
                      padding: "2px 8px",
                      cursor: "pointer",
                    }}
                    onClick={onClickNotification}
                  >
                    <svg
                      style={{
                        marginTop: "2px",
                      }}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <rect width="18" height="18" rx="9" fill="#FFF7E6" />
                      <rect
                        x="2"
                        y="2"
                        width="14"
                        height="14"
                        rx="7"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <rect
                        x="2"
                        y="2"
                        width="14"
                        height="14"
                        rx="7"
                        fill="#FFE7BA"
                      />
                      <rect
                        x="4"
                        y="4"
                        width="10"
                        height="10"
                        rx="5"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <rect
                        x="4"
                        y="4"
                        width="10"
                        height="10"
                        rx="5"
                        fill="#FFD591"
                      />
                      <rect
                        x="6"
                        y="6"
                        width="6"
                        height="6"
                        rx="3"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <g clip-path="url(#clip0_68_22479)">
                        <rect
                          x="6"
                          y="6"
                          width="6"
                          height="6"
                          rx="3"
                          fill="#FA8C16"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_68_22479">
                          <rect
                            x="6"
                            y="6"
                            width="6"
                            height="6"
                            rx="3"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <Typography>Notification</Typography>
                    <Typography>{notifCount}</Typography>
                  </Space>
                </Spin>
              )}
              {collapsible && (
                <Button
                  icon={
                    !collapseDevice ? (
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
                  onClick={() => setCollapseDevice(!collapseDevice)}
                />
              )}
            </Space>
          </Col>
          <Col
            span={24}
            // className={collapseDevice ? 'collabsible active' : 'collabsible'}
            // style={{
            //   overflow: collapseDevice ? 'visible' : 'hidden',
            // }}
            className={"collapse" + (collapseDevice ? "" : " open")}
          >
            <Row gutter={[24, 16]}>
              <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                <Space size={"middle"} wrap>
                  <Avatar
                    src={<DevicesIcons />}
                    size={{
                      xs: 54,
                      sm: 54,
                      md: 54,
                      lg: 64,
                      xl: 64,
                      xxl: 64,
                    }}
                    style={{
                      backgroundColor: "#1890FF",
                      padding: "6px 4px",
                      boxShadow:
                        "0px 100px 80px rgba(47, 84, 235, 0.07), 0px 41.7776px 33.4221px rgba(47, 84, 235, 0.0668802), 0px 22.3363px 17.869px rgba(47, 84, 235, 0.0637831), 0px 12.5216px 10.0172px rgba(47, 84, 235, 0.0591401), 0px 6.6501px 5.32008px rgba(47, 84, 235, 0.0516068), 0px 2.76726px 2.21381px rgba(47, 84, 235, 0.0382912)",
                    }}
                  />
                  <Space direction="vertical" align="center" size={"small"}>
                    <Typography
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {deviceTotal}
                    </Typography>
                    <Typography
                      style={{
                        marginTop: -5,
                        padding: 0,
                      }}
                    >
                      Total Device
                    </Typography>
                  </Space>
                </Space>
              </Col>
              <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                <Space size={"middle"} wrap>
                  <Avatar
                    size={{
                      xs: 54,
                      sm: 54,
                      md: 54,
                      lg: 64,
                      xl: 64,
                      xxl: 64,
                    }}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "5px solid #52C41A",
                      boxShadow:
                        "0px 100px 80px rgba(82, 196, 26, 0.07), 0px 41.7776px 33.4221px rgba(82, 196, 26, 0.0668802), 0px 22.3363px 17.869px rgba(82, 196, 26, 0.0637831), 0px 12.5216px 10.0172px rgba(82, 196, 26, 0.0591401), 0px 6.6501px 5.32008px rgba(82, 196, 26, 0.0516068), 0px 2.76726px 2.21381px rgba(82, 196, 26, 0.0382912)",
                    }}
                  >
                    <WifiOutlined style={{ fontSize: 30, color: "#52C41A" }} />
                  </Avatar>
                  <Space direction="vertical" align="center" size={"small"}>
                    <Typography
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {deviceOnline}
                    </Typography>
                    <Typography
                      style={{
                        marginTop: -5,
                        padding: 0,
                      }}
                    >
                      Online
                    </Typography>
                  </Space>
                </Space>
              </Col>
              <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                <Space size={"middle"} wrap>
                  <Avatar
                    size={{
                      xs: 54,
                      sm: 54,
                      md: 54,
                      lg: 64,
                      xl: 64,
                      xxl: 64,
                    }}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "5px solid #FF4D4F",
                      boxShadow:
                        "0px 100px 80px rgba(255, 77, 79, 0.07), 0px 41.7776px 33.4221px rgba(255, 77, 79, 0.0668802), 0px 22.3363px 17.869px rgba(255, 77, 79, 0.0637831), 0px 12.5216px 10.0172px rgba(255, 77, 79, 0.0591401), 0px 6.6501px 5.32008px rgba(255, 77, 79, 0.0516068), 0px 2.76726px 2.21381px rgba(255, 77, 79, 0.0382912)",
                    }}
                  >
                    <OfflineIcon style={{ fontSize: 34, color: "#FF4D4F" }} />
                  </Avatar>
                  <Space direction="vertical" align="center" size={"small"}>
                    <Typography
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {deviceOffline}
                    </Typography>
                    <Typography
                      style={{
                        marginTop: -5,
                        padding: 0,
                        color: "rgba(0, 0, 0, 0.65)",
                      }}
                    >
                      Offline
                    </Typography>
                  </Space>
                </Space>
              </Col>
            </Row>
            <Col
              span={24}
              style={{
                textAlign: "right",
                marginTop: "12px",
              }}
            >
              <Tag
                style={{
                  borderRadius: 8,
                  borderWidth: 0,
                  cursor: "pointer",
                  fontSize: "14px",
                  padding: "3px 6px",
                }}
                color="blue"
                onClick={onClickViewDetail}
              >
                View detail
              </Tag>
            </Col>
          </Col>
        </Row>
      </Spin>
    </Card>
  );
};

export default CardDevices;
