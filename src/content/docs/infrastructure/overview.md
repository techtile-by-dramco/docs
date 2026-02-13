---
title: Infrastructure Overview
description: Component map and boundaries for Techtile infrastructure.
component: cross-cutting
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Goal

Provide a decision-ready map of Techtile infrastructure as independently maintained components.

## Component Boundaries

1. `physical`: room structure, tile grid, overlays, spatial segmentation
2. `network`: switching, routing, VPN access, addressing, switchports
3. `time`: PTP/clock distribution, time-provider, DAQ sync coupling
4. `power`: cabinet distribution, PDUs, PoE midspans, PoE board design
5. `tile-node`: baseline per-tile stack (RPi + SDR + PoE board)
6. `rf`: Octoclock and antenna assets for RF clock/signal distribution
7. `daq`: PXIe capture/generation backbone and synchronized slot usage
8. `qualisys`: motion-capture network and QTM/QDS integration
9. `operations`: remote access, tile management, and operations procedures

## Canonical Source Policy

- Non-`DESKTOP-HG9HJV3` files are treated as primary when duplicates exist.
- Operational docs override paper-era values when they conflict.
- Credentials/tokens are treated as sensitive and are not reproduced in docs content.

## Information Architecture

Routes are grouped as:

- `/infrastructure/*` for technical component dossiers
- `/operations/*` for access and operations workflows

## Data-Flow Summary

- **Control plane**: management access and orchestration over Ethernet/VPN.
- **Timing plane**: PTP and dedicated timing hardware to maintain coherence.
- **Power plane**: PoE midspan chain and cabinet power distribution.
- **Signal plane**: RF/DAQ/Qualisys subsystems for experiment data and ground truth.

## Known Gaps

- Some DAQ and power manuals are vendor-heavy and not deployment-specific.
- Certain RF mappings are encoded in spreadsheet/slide assets and need manual interpretation.
- A few network documents contain legacy ranges that conflict with current switch docs.
