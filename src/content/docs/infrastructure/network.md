---
title: Network Backbone & Access
description: Switch topology, VLAN layout, VPN entry, and switchport assignments.
component: network
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

Production switching, addressing, and remote-access path used by all tile and backend services.

## Deployed Facts

- Four color-coded switches are documented: `white`, `blue`, `red`, `yellow`.
- Switch docs define a Techtile VLAN and inter-switch links via channel-group ports.
- Port assignments for midspans, DAQ, RAID, server, and time-provider are documented in switchport tables.
- Patch panel to midspan port mappings exist for tile identifiers (`A1..G20`).
- VPN gateway infrastructure runs on `VEP1405` using `VyOS`.

## Addressing Notes

- `Switch_overview.pdf` documents `192.108.0.0/24` as Techtile VLAN scope.
- `IP address overview.docx` contains legacy/expanded ranges (`/22`) and a detailed asset table.
- The extracted tables below preserve source values from operational files.

## IP Address Overview

### Network

| Device | IPv4 | Switch | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- | --- |
| Router (Kaho-network) (VPN address) | [10.128.52.32/20](http://10.128.52.32) | `/` | `/` | [Network](/infrastructure/network/) | External/Kaho side |
| Router (Techtile-network) | [192.108.0.254](http://192.108.0.254) | [Yellow](#switch-yellow) | `54` | [Network](/infrastructure/network/) | Potential gateway conflict vs legacy docs |
| Techtile-WiFi-router | `DHCP` | [Yellow](#switch-yellow) | `53` | [Network](/infrastructure/network/) |  |
| NIKO home control | `DHCP` | [Yellow](#switch-yellow) | `49` | [Network](/infrastructure/network/) |  |
| Switch 1 | [192.108.0.19](http://192.108.0.19) | [White](#switch-white) | White | [Network](/infrastructure/network/) | Management IP |
| Switch 2 | [192.108.0.18](http://192.108.0.18) | [Blue](#switch-blue) | Blue | [Network](/infrastructure/network/) | Management IP |
| Switch 3 | [192.108.0.17](http://192.108.0.17) | [Red](#switch-red) | Red | [Network](/infrastructure/network/) | Management IP |
| Switch 4 | [192.108.0.16](http://192.108.0.16) | [Yellow](#switch-yellow) | Yellow | [Network](/infrastructure/network/) | Management IP |

### Time

| Device | IPv4 | Switch | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- | --- |
| Time Provider (mgmt) | [192.108.0.2](http://192.108.0.2) | [Yellow](#switch-yellow) | `51` | [Time](/infrastructure/time/) |  |
| Time Provider (PTP port) | [192.108.0.3](http://192.108.0.3) | [Yellow](#switch-yellow) | `50` | [Time](/infrastructure/time/) |  |

### Power

| Device | IPv4 | Switch | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- | --- |
| Midspan 1 (PD-9624GC) | [192.108.0.4](http://192.108.0.4) | [Blue](#switch-blue) | `54` | [Power](/infrastructure/power/) |  |
| Midspan 2 (PD-9624GC) | [192.108.0.5](http://192.108.0.5) | [Blue](#switch-blue) | `53` | [Power](/infrastructure/power/) |  |
| Midspan 3 (PD-9624GC) | [192.108.0.6](http://192.108.0.6) | [Blue](#switch-blue) | `52` | [Power](/infrastructure/power/) |  |
| Midspan 4 (PD-9624GC) | [192.108.0.7](http://192.108.0.7) | [Blue](#switch-blue) | `51` | [Power](/infrastructure/power/) |  |
| Midspan 5 (PD-9612GC) | [192.108.0.8](http://192.108.0.8) | [White](#switch-white) | `54` | [Power](/infrastructure/power/) |  |
| Midspan 6 (PD-9612GC) | [192.108.0.9](http://192.108.0.9) | [White](#switch-white) | `53` | [Power](/infrastructure/power/) |  |
| Midspan 7 (PD-9612GC) | [192.108.0.10](http://192.108.0.10) | [White](#switch-white) | `52` | [Power](/infrastructure/power/) |  |
| Midspan 8 (PD-9612GC) | [192.108.0.11](http://192.108.0.11) | [White](#switch-white) | `51` | [Power](/infrastructure/power/) |  |
| Midspan 9 (PD-9612GC) | [192.108.0.12](http://192.108.0.12) | [White](#switch-white) | `50` | [Power](/infrastructure/power/) |  |

### DAQ

| Device | IPv4 | Switch | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- | --- |
| Techtile-server | [192.108.0.1](http://192.108.0.1) | [Yellow](#switch-yellow) | `52` | [DAQ](/infrastructure/daq/) | Backend host |
| DELL SERVER IDRAC | [192.108.0.14](http://192.108.0.14) | [Yellow](#switch-yellow) | *(blank)* | [DAQ](/infrastructure/daq/) | Source switchport blank |
| TI DAQ | [192.108.0.15](http://192.108.0.15) | [Yellow](#switch-yellow) | `47` | [DAQ](/infrastructure/daq/) |  |
| RAID | [192.108.0.20](http://192.108.0.20) | [Yellow](#switch-yellow) | `48` | [DAQ](/infrastructure/daq/) |  |

### Qualisys

| Device | IPv4 | Switch | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- | --- |
| Qualisys PC | [192.108.0.13](http://192.108.0.13) | [Yellow](#switch-yellow) | `46` | [Qualisys](/infrastructure/qualisys/) |  |


## Patch-to-Midspan Overview

### Midspan 1

| Row |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `A1` | `A2` | `A3` | `A4` | `B1` | `B2` | `B3` | `B4` | `A5` | `A6` | `A7` | `A8` | `A9` | `A10` | `A11` | `A12` | `A13` | `A14` | `B11` | `B12` | `B13` | `B14` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` | `13` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` |

### Midspan 2

| Row |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `C1` | `C2` | `C3` | `C4` | `D1` | `D2` | `D3` | `D4` | `B5` | `B6` | `B7` | `B8` | `B9` | `B10` | `C11` | `C12` | `C13` | `C14` | `D11` | `D12` | `D13` | `D14` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` | `13` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` |

### Midspan 3

| Row |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `E1` | `E2` | `E3` | `E4` | `F1` | `F2` | `F3` | `F4` | `C5` | `C6` | `C7` | `C8` | `C9` | `C10` | `E11` | `E12` | `E13` | `E14` | `F11` | `F12` | `F13` | `F14` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` | `13` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` |

### Midspan 4

| Row |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `G1` | `G2` | `G3` | `G4` | `D5` | `D6` | `D7` | `D8` | `D9` | `D10` | `E5` | `E6` | `E7` | `E8` | `E9` | `E10` | `F5` | `F6` | `F7` | `F8` | `F9` | `F10` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` | `13` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` |

### Midspan 5

| Row |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `G5` | `G6` | `G7` | `G8` | `G9` | `G10` | `G11` | `G12` | `G13` | `G14` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` |

### Midspan 6

| Row |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Tile | `G15` | `G16` | `G17` | `G18` | `G19` | `G20` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` |

### Midspan 7

| Row |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `E15` | `E16` | `E17` | `E18` | `E19` | `E20` | `F15` | `F16` | `F17` | `F18` | `F19` | `F20` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` |

### Midspan 8

| Row |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `C15` | `C16` | `C17` | `C18` | `C19` | `C20` | `D15` | `D16` | `D17` | `D18` | `D19` | `D20` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` |

### Midspan 9

| Row |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tile | `A15` | `A16` | `A17` | `A18` | `A19` | `A20` | `B15` | `B16` | `B17` | `B18` | `B19` | `B20` |
| Midspan port | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` |


## PTP Switch Settings



### PTP Role and Usage Table

| Switch | Switchport | Role | Usage | Related Docs |
| --- | --- | --- | --- | --- |
| 1: White | 29 | Slave | PTP clock from switch Blue | [Time](/infrastructure/time/) |
| 1: White | 1-24, 31-44 | Master | RPI’s and extra | [Time](/infrastructure/time/) · [Tile Node](/infrastructure/tile-node/) |
| 2: Blue | 25 | Slave | PTP clock from switch Red | [Time](/infrastructure/time/) |
| 2: Blue | 29 | Master | PTP clock to switch White | [Time](/infrastructure/time/) |
| 2: Blue | 1-24, 31-44 | Master | RPI’s and extra | [Time](/infrastructure/time/) · [Tile Node](/infrastructure/tile-node/) |
| 3: Red | 29 | Slave | PTP clock from switch Yellow | [Time](/infrastructure/time/) |
| 3: Red | 25 | Master | PTP clock to switch Blue | [Time](/infrastructure/time/) |
| 3: Red | 1-24, 31-44 | Master | RPI’s and extra | [Time](/infrastructure/time/) · [Tile Node](/infrastructure/tile-node/) |
| 4: Yellow | 50 | Slave | Grandmaster clock | [Time](/infrastructure/time/) |
| 4: Yellow | 29 | Master | PTP clock to switch Red | [Time](/infrastructure/time/) |
| 4: Yellow | 1-24, 31-44 | Master | RPI’s and extra | [Time](/infrastructure/time/) · [Tile Node](/infrastructure/tile-node/) |

### PTP Port Capacity Summary

| Switch | Master Ports | Slave Ports | Free Master Ports for RPI’s | Related Docs |
| --- | --- | --- | --- | --- |
| 1: White | 38 | 1 | 38 | [Time](/infrastructure/time/) |
| 2: Blue | 39 | 1 | 38 | [Time](/infrastructure/time/) |
| 3: Red | 39 | 1 | 38 | [Time](/infrastructure/time/) |
| 4: Yellow | 39 | 1 | 38 | [Time](/infrastructure/time/) |

## Switchport Overview

### Switch White

- Role: upper switch in documented color topology.
- Related links: [PTP settings table](#ptp-switch-settings), [Switchport section](#switchport-overview).

| Device | IPv4 | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- |
| Midspan 5 (PD-9612GC) | [192.108.0.8](http://192.108.0.8) | `54` | [Power](/infrastructure/power/) |  |
| Midspan 6 (PD-9612GC) | [192.108.0.9](http://192.108.0.9) | `53` | [Power](/infrastructure/power/) |  |
| Midspan 7 (PD-9612GC) | [192.108.0.10](http://192.108.0.10) | `52` | [Power](/infrastructure/power/) |  |
| Midspan 8 (PD-9612GC) | [192.108.0.11](http://192.108.0.11) | `51` | [Power](/infrastructure/power/) |  |
| Midspan 9 (PD-9612GC) | [192.108.0.12](http://192.108.0.12) | `50` | [Power](/infrastructure/power/) |  |
| RPI’s | `DHCP` | `1-24, 31-42` | [Tile Node](/infrastructure/tile-node/) |  |

### Switch Blue

- Role: interconnect switch in documented PTP relay chain.
- Related links: [PTP settings table](#ptp-switch-settings), [Switchport section](#switchport-overview).

| Device | IPv4 | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- |
| Midspan 1 (PD-9624GC) | [192.108.0.4](http://192.108.0.4) | `54` | [Power](/infrastructure/power/) |  |
| Midspan 2 (PD-9624GC) | [192.108.0.5](http://192.108.0.5) | `53` | [Power](/infrastructure/power/) |  |
| Midspan 3 (PD-9624GC) | [192.108.0.6](http://192.108.0.6) | `52` | [Power](/infrastructure/power/) |  |
| Midspan 4 (PD-9624GC) | [192.108.0.7](http://192.108.0.7) | `51` | [Power](/infrastructure/power/) |  |
| Z14 | `DHCP` | `50` | [Tile Node](/infrastructure/tile-node/) |  |
| Z13 | `DHCP` | `49` | [Tile Node](/infrastructure/tile-node/) |  |
| Z12 | `DHCP` | `48` | [Tile Node](/infrastructure/tile-node/) |  |
| Z11 | `DHCP` | `47` | [Tile Node](/infrastructure/tile-node/) |  |
| RPI’s | `DHCP` | `1-24, 31-42` | [Tile Node](/infrastructure/tile-node/) |  |
| Connection to switch WHITE | `/` | `29` | [Network](/infrastructure/network/) | Inter-switch link |
| Connection to switch RED | `/` | `25` | [Network](/infrastructure/network/) | Inter-switch link |

### Switch Red

- Role: interconnect switch in documented PTP relay chain.
- Related links: [PTP settings table](#ptp-switch-settings), [Switchport section](#switchport-overview).

| Device | IPv4 | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- |
| Z10 | `DHCP` | `54` | [Tile Node](/infrastructure/tile-node/) |  |
| Z9 | `DHCP` | `53` | [Tile Node](/infrastructure/tile-node/) |  |
| Z8 | `DHCP` | `52` | [Tile Node](/infrastructure/tile-node/) |  |
| Z7 | `DHCP` | `51` | [Tile Node](/infrastructure/tile-node/) |  |
| Z6 | `DHCP` | `50` | [Tile Node](/infrastructure/tile-node/) |  |
| Z5 | `DHCP` | `49` | [Tile Node](/infrastructure/tile-node/) |  |
| Z4 | `DHCP` | `48` | [Tile Node](/infrastructure/tile-node/) |  |
| Z3 | `DHCP` | `47` | [Tile Node](/infrastructure/tile-node/) |  |
| Z2 | `DHCP` | `46` | [Tile Node](/infrastructure/tile-node/) |  |
| Z1 | `DHCP` | `45` | [Tile Node](/infrastructure/tile-node/) |  |
| RPI’s | `DHCP` | `1-24, 31-40` | [Tile Node](/infrastructure/tile-node/) |  |
| Connection to switch BLUE | `/` | `25` | [Network](/infrastructure/network/) | Inter-switch link |
| Connection to switch YELLOW | `/` | `29` | [Network](/infrastructure/network/) | Inter-switch link |
| Testing | `DHCP` | `41-42` | [Network](/infrastructure/network/) |  |

### Switch Yellow

- Role: bottom switch in topology, hosts key infrastructure endpoints.
- Related links: [PTP settings table](#ptp-switch-settings), [Switchport section](#switchport-overview).

| Device | IPv4 | Switchport | Related Docs | Notes |
| --- | --- | --- | --- | --- |
| Router (Techtile-network) | [192.108.0.254](http://192.108.0.254) | `54` | [Network](/infrastructure/network/) |  |
| Techtile-WiFi-router | `DHCP` | `53` | [Network](/infrastructure/network/) |  |
| Techtile-server | [192.108.0.1](http://192.108.0.1) | `52` | [DAQ](/infrastructure/daq/) |  |
| Time Provider (mgmt) | [192.108.0.2](http://192.108.0.2) | `51` | [Time](/infrastructure/time/) |  |
| Time Provider (PTP port) | [192.108.0.3](http://192.108.0.3) | `50` | [Time](/infrastructure/time/) |  |
| NIKO home control | `DHCP` | `49` | [Network](/infrastructure/network/) |  |
| RAID | `DHCP` | `48` | [DAQ](/infrastructure/daq/) |  |
| TI DAQ | [192.108.0.15](http://192.108.0.15) | `47` | [DAQ](/infrastructure/daq/) |  |
| RPI’s | `DHCP` | `1-24, 31-40` | [Tile Node](/infrastructure/tile-node/) |  |
| Connection to switch RED | `/` | `29` | [Network](/infrastructure/network/) | Inter-switch link |
| Testing | `DHCP` | `41-42` | [Network](/infrastructure/network/) |  |


## VPN Infrastructure

- The Techtile VPN service runs on a `VEP1405` appliance using `VyOS`.
- VPN is the remote ingress path into the Techtile network when users are off-site.
- For account onboarding, client files, and step-by-step connection setup, use [Operations: Remote Access](/operations/remote-access/).

## Interfaces

- **Southbound**: tile RPIs and PoE midspans.
- **Northbound**: server, RAID, DAQ, Qualisys PC, and time-provider ports.
- **Remote**: VPN client path into Techtile network.
