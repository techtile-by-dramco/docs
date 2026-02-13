---
title: Power & PoE Distribution
description: Cabinet power topology, PoE midspans, and tile-side PoE board architecture.
component: power
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

Power distribution from cabinet PDUs to network backbone and per-tile PoE delivery.

## Deployed Facts

- Cabinet architecture document lists multiple PDUs feeding server/switch/midspan groups.
- Midspan inventory is documented as mixed `PD-9624GC` and `PD-9612GC` units.
- Tile PoE board documentation targets IEEE `802.3bt` support and multi-output power rails.
- PoE board design includes class selection (DIP/classification), USB-C output, and auxiliary outputs.
- Hardware docs include class-board variants for class 4/5/8 profiles.

## Server Cabinet Connections

This diagram shows what is connected to each PDU and includes management IP annotations.

<img src="../../power/Connections-Server-Cabinet.jpg" alt="Server cabinet connections" />

- Image: [`../../power/Connections-Server-Cabinet.jpg`](../../power/Connections-Server-Cabinet.jpg)
- PDF: [`../../power/Connections-Server-Cabinet.pdf`](../../power/Connections-Server-Cabinet.pdf)
- PPTX (editable): [`../../power/Connections-Server-Cabinet.pptx`](../../power/Connections-Server-Cabinet.pptx)

## Interfaces

- **Upstream**: PDUs and cabinet feeds.
- **Lateral**: switch-to-midspan-to-tile chain.
- **Downstream**: RPi/SDR and optional peripherals via PoE board connectors.

## Constraints and Risks

- Power class mismatch can cause PSE shutdown under load.
- PoE board revisions exist (`V1.x` artifacts), so exact deployed revision must be tracked per tile.
- Cabinet-level changes require synchronized updates in network and switchport docs.

## Depends On

- Stable physical cabinet and cable routing.

## Provides To

- Network switch and midspan operation.
- Tile node bring-up (RPi/SDR/peripherals).
- Timing and acquisition systems availability.

## Critical Paths

- PDU availability directly gates switch/PTP/DAQ availability.
- Midspan uplink and classification settings gate tile boot stability.
