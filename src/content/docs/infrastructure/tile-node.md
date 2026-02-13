---
title: Tile Node Platform (Edge Compute + SDR)
description: Baseline per-tile compute/radio stack and integration expectations.
component: tile-node
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

Default edge node composition attached to each tile and its control/data expectations.

## Deployed Facts

- Paper and ops docs describe a default tile stack with:
  - Raspberry Pi 4 (edge compute)
  - USRP B210 (radio)
  - custom PoE board
- Ethernet is the primary cable for power + data paths through midspans/switches.
- Tile labels (`A1..G20` style) map into patch-midspan-switch routes.
- PoE board docs include USB-C output and class signaling to edge devices.

## Interfaces

- **Power**: PoE board input/output and class configuration.
- **Network**: tile DHCP/static behavior as assigned by switch/VLAN policy.
- **Timing**: PTP over Ethernet and optional external SDR clock inputs.
- **Control**: RPi hosts SDR application/runtime stack.

## Constraints and Risks

- Per-tile hardware variation is allowed; this can break assumptions in generic scripts.
- Startup behavior depends on negotiated/selected PoE class.
- Some mappings exist only in static docs; no single machine-readable source of truth was found.

## Depends On

- Physical tile mount and connectivity map.
- Stable PoE delivery and switch fabric.
- Working timing distribution for synchronized use cases.

## Provides To

- Distributed RF and sensing endpoints.
- Experiment orchestration execution points.

## Critical Paths

- Misaligned tile mapping (patch/midspan/switchport) causes endpoint misidentification.
- Inadequate PoE class at boot can cause abrupt power drops and experiment loss.
