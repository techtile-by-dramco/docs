---
title: Tile Management
description: Operating and maintaining Techtile Raspberry Pi nodes using the Ansible automation repository.
component: operations
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Repository

- Main automation repo: <https://github.com/techtile-by-dramco/ansible>

## What It Does

The Tile Management Ansible stack manages day-to-day operations for Techtile Raspberry Pi nodes and related services:

- Host reachability checks (`ping` playbooks).
- Batch command execution on tile groups (`run_cmd` pattern).
- OS/package updates across selected tiles (`apt-upgrade.yaml`).
- Controlled reboot and shutdown of tiles (`shutdown.yaml` with `action_to_take`).
- UHD/USRP software setup (`main-uhd.yaml`).
- FPGA image deployment on attached USRP devices (`load-fpga-image.yaml`).
- PoE power control logic tied to midspan + PoE port mappings (`power-ctrl.py` with SNMP-based control helpers).

## Inventory Model

The inventory defines host/group organization and is designed for selective rollouts:

- Role-style groups: `server`, `tests`, `fail`, `multiON`.
- Spatial groups: `wallEast`, `wallWest`, `floor`, `ceiling`.
- Segment groups: `segmentA` through `segmentG`.
- Aggregate groups: `rpis` and `walls`.

Operationally, each tile host entry is associated with:

- Tile DNS/hostname (for example `rpi-a01.local`).
- Midspan identifier (for example `midspan-009`).
- Midspan PoE port number.

This mapping is what enables targeted power operations and physical troubleshooting by tile name.

## Typical Operations

| Operation | Playbook/Entry Point | Example |
| --- | --- | --- |
| Check connectivity | `general/ping.yaml` | `ansible-playbook -i inventory/hosts.yaml general/ping.yaml --extra-vars "tiles=segmentA"` |
| Run command on tiles | `general/run_cmd.yaml` | `ansible-playbook -i inventory/hosts.yaml -l rpis general/run_cmd.yaml -e "cmd='uname -a'"` |
| Upgrade packages | `tiles/apt-upgrade.yaml` | `ansible-playbook -i inventory/hosts.yaml tiles/apt-upgrade.yaml -e "tiles=ceiling"` |
| Shutdown or reboot | `tiles/shutdown.yaml` | `ansible-playbook -i inventory/hosts.yaml tiles/shutdown.yaml -e "tiles=G01 action_to_take=reboot timeout_seconds=0"` |
| Install/update UHD stack | `tiles/main-uhd.yaml` | `ansible-playbook -i inventory/hosts.yaml tiles/main-uhd.yaml -e "tiles=floor"` |
| Load USRP FPGA image | `tiles/load-fpga-image.yaml` | `ansible-playbook -i inventory/hosts.yaml tiles/load-fpga-image.yaml -e "tiles=segmentB"` |

## Operational Notes

- Group-targeted execution is the default pattern; avoid broad `all` runs unless intentionally planned.
- `ansible.cfg` is tuned for high fan-out (`forks=200`, SSH pipelining enabled) to handle many tile nodes in parallel.
- Some helper scripts use `ansible_runner` for scripted operations from the server side.
- Keep SNMP and login secrets outside docs and out of committed plaintext.

